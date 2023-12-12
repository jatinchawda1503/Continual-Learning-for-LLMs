FROM python:3.11

COPY . /continual_learning/backend


WORKDIR /continual_learning/backend


EXPOSE 5000

CMD ["sh", "-c", "pip install -r requirements.txt && python backend.py"]
