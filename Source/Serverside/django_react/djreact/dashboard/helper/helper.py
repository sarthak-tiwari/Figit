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