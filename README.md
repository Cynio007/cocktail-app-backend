# Cocktail-App: back-end

<br/>

Aplikacja korzysta z zewnętrznego API(thecocktaildb.com), w której możemy pobrać i zapisać na swoim koncie losowo wybrany lub konketny (po wpisaniu w wyszukiwarke) drink. Każdy trunek posiada takie informacje jak: Nazwa, składniki, instrukcja przygotowania, info czy jest z alkoholem czy bez oraz zdjęcie pogladowege. Poniżej zamieszczam gif z insomni z fukcjonalnością back-endu.
(Link do front-end'u: https://github.com/Cynio007/cocktail-app-frontend), Live Demo: 'https://cocktailapp.networkmanager.info'

![back-end gif](./images/gif02.gif)
<br/>

## Uruchomienie lokalnie

Stwórz baze danych MySQL:

```bash
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cocktails',
```

Pobierz projekt

```bash
  git clone https://github.com/Cynio007/cocktail-app-backend.git
```

Przejdz do katalogu

```bash
  cd cocktail-app-backend
```

Zainstaluj niezbędne pliki

```bash
  npm install
```

Uruchom serwer

```bash
  npm start
```

<br/>

## Technologie:

- Nest
- TypeScript
- MySQL
