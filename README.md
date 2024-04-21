This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Design / Functionality

## Czech Version

- **V horní části** budou inputy pro přidání nového vozidla a tlačítko pro potvrzení.
  - Volitelně je možno přidat i input pro obrázek.
- **V levé části** seznam všech přidaných vozidel.
- **V pravé části** detail vybraného vozidla ze seznamu.
- Při přidání vozidla se zobrazí v pravé části **jeho detail** a v levé části se přidá řádka do seznamu.
- Vybraná řádka by měla být nějak **označená**.
- Vybraný záznam se projeví v **URL adrese** a funguje navigace prohlížeče (zpět/vpřed/reload).
- **Vzhled** je libovolný, použití css/ui knihovny je povolené.
- Všechny data ukládat do **local storage**.

## English Version

- **At the top** there will be inputs for adding a new vehicle and a button to confirm.
  - Optionally, an input for an image can also be added.
- **On the left side**, a list of all added vehicles.
- **On the right side**, details of the selected vehicle from the list.
- When a vehicle is added, its details will appear on the right side and a line will be added to the list on the left side.
- The selected line should be **highlighted** in some way.
- The selected record will also be reflected in the **URL address** and browser navigation (back/forward/reload) will work.
- The **appearance** is arbitrary, use of css/ui libraries is allowed.
- All data should be saved to **local storage**.
