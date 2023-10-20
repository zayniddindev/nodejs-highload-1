# Test task 1

## Config:

```
cp .env.example .env
```

Change database credentials already deployed database or just use docker with below command:

```
docker compose up -d
```

## Install and run:

```
yarn & yarn start
```

## Test

```
curl -X PUT -H "Content-Type: application/json" -d '{"amount": "2"}' http://localhost:3000/user/1/withdrawBalance
```
