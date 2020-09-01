# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

import csv


class FilmreviewPipeline:
    def __init__(self):
        self.f = open("./FilmReview.csv", "w", encoding='utf-8', newline='')
        self.writer = csv.writer(self.f)
        self.writer.writerow(['film', 'user', 'star', 'time', 'content'])

    def process_item(self, item, spider):
        re_list = [item['film'], item['user'], item['star'], item['time'], item['content']]
        print("=-" * 100)
        print(re_list)
        print("=-" * 100)
        self.writer.writerow(re_list)
        return item

    def close_spider(self, spider):
        # self.writer.close()
        self.f.close()
