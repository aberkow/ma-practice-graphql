#!/bin/bash

./project/wait-for-it.sh prisma:4466 -- prisma deploy

cd /project

npm run dev