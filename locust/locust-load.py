from locust import HttpUser, task, between
# import json
# import random  # Importing the random module

class MyUser(HttpUser):
    wait_time = between(1, 5)
    host = "http://server:1337"  # Use the service name as defined in docker-compose.yml

    @task
    def my_task(self):
        self.client.get('/users')

    # def on_start(self):
    #     # Load user data
    #     with open('./tokens.json', 'r') as file:
    #         self.user_data = json.load(file)

    # @task
    # def my_task(self):
    #     # Pick a user and token
    #     user_id, token = random.choice(list(self.user_data.items()))
        
    #     # Make a request with the chosen user's token
    #     headers = {
    #         'x-access-token': f'{token}',
    #         'user-id': f'{user_id}'
    #     }
    #     self.client.get('/users', headers=headers)