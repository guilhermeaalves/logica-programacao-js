# Setup inicial de um repositório do Github no VS Code local

1. Limpar credenciais do sistema
2. Limpar os dados do navegador
3. Abrir o repositório no Github
4. Copiar a url do repositório (HTTPS)
5. Abrir o VS Code
6. Se houver algum projeto aberto no VS Code, então feche `CTRL + K F`
7. Se houver algum usuário logado no VS Code, então clique `Sair`
8. Verificar as variáveis `User.name` e `User.email` globais: 
~~~bash
git config --global user.name
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas as variáveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.email
~~~
10. Faça a clonagem do seu repositório no computador local:
~~~bash
git clone https://github.com/<usuario>/<repositorio>.git
~~~
11. Abra o projeto clonado no VS Code:
~~~bash
code -r <repositorio_local>/
~~~
12. Faça login no VS Code local para sincronizar suas extensões e temas
13. Ative o salvamento automático _(Auto Save)_: Arquivo > Salvamento automático