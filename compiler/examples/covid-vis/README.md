This is the COVID-Vis project.

To run:

Install Docker/Docker Compose.
sudo ./run-kyrix.sh --build in root directory

Add the tweet database:
./docker-scripts/load-csv.sh tweet_data.csv --dbname covidvis --tablename tweets

Run one of the files in ssv
in ssv/
sudo ./compile.sh SSV_circle.js


Open Kyrix/front-end/js/embed/covid-vis.html
