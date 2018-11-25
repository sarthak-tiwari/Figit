# Python functions to help the django data manipulation

from django.db import connection
import json
from django.http import HttpResponse

class Helper:

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
            query2 = "select date(commit_date) as commit_date, count(*) as commit_count from git_commit_data where committer_name = '"+ str(row[0]) +"' and github_repository = '"+ repo +"' group by date(commit_date) order by date(commit_date)"
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
            query2 = "select date(request_date) as request_date, count(*) as request_count from git_pull_request_data where requester_login = '"+ str(row[0]) +"' and github_repository = '"+ repo +"' group by date(request_date) order by date(request_date)"
            element[columnNames1[1]] = Helper.executeQueryForAnalysingUtil(query2, columnNames2)
            finalResult.append(element)
        json_output = json.dumps(finalResult)
        return HttpResponse(json_output, content_type="application/json") 