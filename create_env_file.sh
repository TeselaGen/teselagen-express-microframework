#!/bin/bash

# .env file
filename=.env

# Create a new file with .env initial values
if [ ! -f $fileame ]; 
then
    echo ".env File not found, creating new one..."
    cp .env.test .env
    echo ".env File created!"
fi


