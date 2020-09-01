# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class FilmreviewItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # 电影名
    film = scrapy.Field()
    # 用户名
    user = scrapy.Field()
    # 评论评分
    star = scrapy.Field()
    # 评论时间
    time = scrapy.Field()
    # 评论内容
    content = scrapy.Field()
    pass
