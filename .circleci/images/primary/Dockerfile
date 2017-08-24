FROM circleci/node:8

USER root
RUN apt-get update
RUN apt-get install python-dev build-essential python-pip
RUN pip install awscli --upgrade

USER circleci
