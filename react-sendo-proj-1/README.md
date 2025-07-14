# react-sendo-proj
Products management tool for user and admin

## Project Structure:
This tool has 2 components: backend server and web UI

Backend: Golang  
Frontend: ReactAdmin [ReactAdmin](https://marmelab.com/react-admin/) that's implemented at `./src/components`

## How to run:

### Development:
You can start FE and BE independently as follows:  
How to run React Admin:   
```shell
$ cd react-sendo-proj-1
$ npm start
```

# New Terminal
How to run BE server:  
```shell
$ cd react-sendo-proj-1/src/backend
$ go run main.go
```

How to run Postgre SQL server:
# On Linux, new Terminal
```shell
$ chmod +x setup_postgres.sh
$ ./setup_postgres.sh
```


# On Windows, new Terminal
```shell
$ cd react-sendo-proj-1
$ bash setup_postgres.sh
```
