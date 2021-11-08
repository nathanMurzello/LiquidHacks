import requests 
upload_data= {
    "name" :"test", 
    "slides": [{
        "type" :1,
        "content": "testing how to get id"
    }]
}
update_data= {
    "Slideshow_ID" :1,
    "name": "this has been updated", 
    "slides": [{
        "type" :1,
        "content": "testing how to get id"
    }]
}
delete_data= {
    "Slideshow_ID" :1
}

response=requests.post('http://127.0.0.1:8000/slideshow', data=upload_data)
#response=requests.get('http://127.0.0.1:8000/slideshow')
#response=requests.put('http://127.0.0.1:8000/slideshow', data=update_data)
#response=requests.delete('http://127.0.0.1:8000/slideshow', data=delete_data)
print(response.json())