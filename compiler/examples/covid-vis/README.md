## This is the COVID-Vis project.

### To run:

- Install Docker/Docker Compose.
- In root directory: `sudo ./run-kyrix.sh --build`
- Add the tweet database:
`./docker-scripts/load-csv.sh tweet_data.csv --dbname covidvis --tablename tweets`
- copy the complile script`cp ../../../docker-scripts/compile.sh compile.sh` into the working directory
- make the compile script runnable: `chmod +x compile.sh`                                                 
- Run one of the files in compiler/examples/covid-vis/ssv/: `sudo ./compile.sh SSV_circle.js`
- Open: `Kyrix/front-end/js/embed/covid-vis.html`
