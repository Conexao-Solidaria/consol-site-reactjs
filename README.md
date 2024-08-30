# Como rodar aplicação

> 🚨 **Atenção, ler atentamente antes de codar ou iniciar a aplicação!!!!!** 🚨 

## Desenvolvimento (Máquina Pessoal)
Executar pelo `git bash` ou qualquer `bash` (CMD e Powershell não inclusos) o arquivo "build.sh"
```
./build.sh
```
Executar pelo `git bash` ou qualquer `bash` (CMD e Powershell não inclusos) o arquivo "start.sh"
```
./start.sh
```
Abrir no **navegador** a url `http://localhost:3000/`

## Produção (AWS)
Executar o arquivo "build.sh"
```
./build.sh
```
Iniciar o docker
```
docker run -p 80:80 --rm consol-site-reactjs-prod
```
