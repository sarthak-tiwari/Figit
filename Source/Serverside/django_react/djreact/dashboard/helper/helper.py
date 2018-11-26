# Python functions to help the django data manipulation

from django.db import connection
import json
from django.http import HttpResponse

class Helper:

    week_query = " \
                    SELECT '38' AS week_num, 'WEEK 38' AS week_name UNION SELECT '39' AS week_num, 'WEEK 39' AS week_name UNION \
                    SELECT '40' AS week_num, 'WEEK 40' AS week_name UNION SELECT '41' AS week_num, 'WEEK 41' AS week_name UNION \
                    SELECT '42' AS week_num, 'WEEK 42' AS week_name UNION SELECT '43' AS week_num, 'WEEK 43' AS week_name UNION \
                    SELECT '44' AS week_num, 'WEEK 44' AS week_name UNION SELECT '45' AS week_num, 'WEEK 45' AS week_name UNION \
                    SELECT '46' AS week_num, 'WEEK 46' AS week_name UNION SELECT '47' AS week_num, 'WEEK 47' AS week_name UNION \
                    SELECT '48' AS week_num, 'WEEK 48' AS week_name) AS mt"

    @staticmethod
    def executeQuery(query, columnNames):
        with connection.cursor() as cursor:
            cursor.execute(query)
            rows = cursor.fetchall()

        finalResult = []
        for row in rows:
            element = {}
            for name, value in zip(columnNames, row):
                element[name] = value
            finalResult.append(element)
        json_output = json.dumps(finalResult)
        return HttpResponse(json_output, content_type="application/json")

    @staticmethod
    def executeQueryForAnalysingUtil(query, columnNames):
        with connection.cursor() as cursor:
            cursor.execute(query)
            rows = cursor.fetchall()

        finalResult = []
        for row in rows:
            element = {}
            for name, value in zip(columnNames, row):
                element[name] = value
            finalResult.append(element)
        return finalResult

    @staticmethod
    def executeQueryForAnalysingCommit(query1, columnNames1, columnNames2, repo):
        with connection.cursor() as cursor:
            cursor.execute(query1)
            rows = cursor.fetchall()

        finalResult = []
        for row in rows:
            element = {}
            element[columnNames1[0]] = str(row[0])
            query2 = "select mt.week_name, IFNULL(pr.commit_count, 0) AS commit_count FROM ("+Helper.week_query+"\
                        LEFT JOIN \
                        (SELECT strftime('%W',commit_date) as commit_week, count(*) as commit_count from git_commit_data \
                        where committer_name = '"+ str(row[0]) +"' and github_repository = '"+ repo +"' group by strftime('%W',commit_date)) pr \
                        ON pr.commit_week = mt.week_num order by mt.week_num"
            element[columnNames1[1]] = Helper.executeQueryForAnalysingUtil(query2, columnNames2)
            finalResult.append(element)
        json_output = json.dumps(finalResult)
        return HttpResponse(json_output, content_type="application/json") 

    @staticmethod
    def executeQueryForAnalysingPullRequest(query1, columnNames1, columnNames2, repo):
        with connection.cursor() as cursor:
            cursor.execute(query1)
            rows = cursor.fetchall()

        finalResult = []
        for row in rows:
            element = {}
            element[columnNames1[0]] = str(row[0])
            query2 = "select mt.week_name, IFNULL(pr.pull_request_count, 0) AS pull_request_count FROM ("+Helper.week_query+"\
                        LEFT JOIN \
                        (SELECT strftime('%W',request_date) as pull_request_week, count(*) as pull_request_count from git_pull_request_data \
                        where requester_login = '"+ str(row[0]) +"' and github_repository = '"+ repo +"' group by strftime('%W',request_date)) pr \
                        ON pr.pull_request_week = mt.week_num order by mt.week_num"
            element[columnNames1[1]] = Helper.executeQueryForAnalysingUtil(query2, columnNames2)
            finalResult.append(element)
        json_output = json.dumps(finalResult)
        return HttpResponse(json_output, content_type="application/json") 