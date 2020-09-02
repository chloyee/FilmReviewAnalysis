# -*- coding: utf-8 -*-
import scrapy, json, time
from bs4 import BeautifulSoup
from FilmReview.items import FilmreviewItem

class ReviewspiderSpider(scrapy.Spider):
    name = 'reviewSpider'
    # allowed_domains = ['https://movie.douban.com/']
    start_urls = ['https://movie.douban.com/']

    def parse(self, response):
        print("=-" * 100)
        # 90年代经典电影
        # https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=%E7%BB%8F%E5%85%B8&start=0&year_range=1990,1999
        for count in range(420, 520, 20):
            fir_url = 'https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=%E7%BB%8F%E5%85%B8&start={}&year_range=1990,1999'.format(count)
            print(fir_url)
            yield scrapy.Request(fir_url, callback=self.parse_main, dont_filter=True)

    def parse_main(self, response):
        infos = json.loads(response.body.decode('utf-8'))
        print(infos)
        datas = infos['data']
        for data in datas:
            title = data['title']  # 名称
            # cover = data['cover']  # 封面图片
            # rate = data['rate']  # 评分
            url = data['url']  # 详情url
            id = str(data['id'])
            if url:
                print(title, url)
                #, meta={'id': id}
                yield scrapy.Request(url, callback=self.parse_detail, meta={'id': id})

    def parse_detail(self, response):
        strid = response.meta['id']
        base_url = 'https://movie.douban.com/subject/{}/comments?'.format(strid)
        # 全部评论的链接
        # b_url = 'https://movie.douban.com/subject/{}/comments?status=P'.format(strid)
        # 前一百条评论
        # n_url = 'https://movie.douban.com/subject/4920528/comments?start=0&limit=20&sort=new_score&status=P'
        urls = []
        for page in range(0, 220, 20):
            n_url = base_url + 'start={}&limit=20&sort=new_score&status=P'.format(page)
            print('n_url################# ', n_url)
            urls.append(n_url)
            if n_url:
                yield scrapy.Request(n_url, callback=self.parse_comment)

    def parse_comment(self, response):
        item = FilmreviewItem()
        soup = BeautifulSoup(response.body, 'lxml')
        info = soup.select('div.comment-item')
        for i in info:
            # print(i)
            item["film"] = str(response.xpath('//div[@id="content"]/h1/text()').extract()[0]).split(" ")[0]
            item["user"] = i.select('span.comment-info')[0].select('a')[0].string
            star = str(i.select('span.comment-info')[0].select('span')[1])
            temp = star.replace("<"," ").replace(">","").split(" ")
            for j in temp:
                if "title" in j:
                    star = j.split("=")[1].replace('"','')
            item["star"] = star
            item["time"] = str(i.select('span.comment-info')[0].select('span.comment-time ')[0].string).split("\n")[1].replace(" ","")
            item["content"] = str(i.select('span.short')[0].string).replace("\n", "  ")
            yield item

            # print("-*-"*100)
            # print(str(response.xpath('//div[@id="content"]/h1/text()').extract()[0]).split(" ")[0])
            # # for j in i.select('span.comment-info')[0].select('span'):
            # #     print(j)
            # #     print("\n")
            # print(i.select('span.comment-info')[0].select('a')[0].string)
            # star = str(i.select('span.comment-info')[0].select('span')[1])
            # temp = star.replace("<", " ").replace(">", "").split(" ")
            # for j in temp:
            #     if "title" in j:
            #         star = j.split("=")[1].replace('"', '')
            # print(star)
            # print(str(i.select('span.comment-info')[0].select('span.comment-time ')[0].string).split("\n")[1].replace(" ",""))
            # print(i.select('span.short')[0].string)
            # # print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
            # print("-*-" * 100)
