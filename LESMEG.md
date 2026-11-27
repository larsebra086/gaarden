# Gården – slik legger du spillet på iPaden som en app

Spillet er én nettside som iPaden kan lagre som en app på Hjem-skjermen. Den åpnes da i fullskjerm uten nettleser, og etter første gang fungerer den også uten internett.

## 1. Legg filene på GitHub (gratis)

1. Logg inn på github.com (lag konto om du ikke har).
2. Trykk **+** øverst til høyre → **New repository**.
3. Navn: `gaarden`. Velg **Public**. Trykk **Create repository**.
4. På neste side: trykk lenken **uploading an existing file**.
5. Dra inn **alt** fra denne mappen, også mappen `audio` (dra selve mappen inn fra Finder/Utforsker, så blir undermappene med): `index.html`, `sw.js`, `manifest.webmanifest`, ikonene og `audio`.
6. Trykk **Commit changes**.

## 2. Slå på GitHub Pages (gjør filene til en nettside)

1. I repoet: **Settings** → **Pages** (i menyen til venstre).
2. Under «Build and deployment»: Source = **Deploy from a branch**, Branch = **main**, mappe = **/ (root)**. Trykk **Save**.
3. Vent 1–2 minutter og last siden på nytt. Øverst står adressen, f.eks. `https://brukernavn.github.io/gaarden/`.

## 3. Installer på iPaden

1. Åpne adressen i **Safari** (må være Safari).
2. Trykk **Del-knappen** (firkant med pil opp) → **Legg til på Hjem-skjerm** → **Legg til**.
3. Åpne «Gården» fra Hjem-skjermen. Den starter i fullskjerm, uten adressefelt.
4. Spill én runde mens iPaden er på nett. Da lagres spillet, og det virker uten internett etterpå (i bilen, på hytta).

## 4. Anbefalt på iPaden

- **Lås barnet inne i spillet:** Innstillinger → Tilgjengelighet → **Guidet tilgang** → på. Åpne spillet og trykk tre ganger på toppknappen (eller Hjem-knappen) → **Start**. Avslutt på samme måte med koden din.
- **Bedre norsk stemme:** Innstillinger → Tilgjengelighet → **Opplest innhold** → Stemmer → Norsk → last ned en stemme (f.eks. «Nora (forbedret)»).
- Hold iPaden liggende (spillet er laget for liggende format).

## 5. Foreldremeny

Hold inne det lille tannhjulet øverst til høyre i ca. 2 sekunder (et barn som bare trykker, får ingenting). Der kan du:
- skru stemmer, lyder og musikk opp og ned
- sette spilletid (av, 10, 15, 20 eller 30 min). Når tiden er ute, blir det leggetid på gården etter leken barnet holder på med: det blir natt, dyrene sovner, og spillet står stille til du holder inne tannhjulet og velger «Fortsett å leke»
- starte leggetid med en gang

## 6. Oppdatere spillet senere

Last opp alle filene og `audio`-mappen på nytt til samme repo (Add file → Upload files → Commit). Filer med samme navn blir erstattet. Åpne appen mens iPaden er på nett, så henter den nyeste versjon. Lukk og åpne appen én gang til hvis du ikke ser endringen.

## Greit å vite

- Et **Public** repo betyr at koden og spilladressen er synlige for andre som finner dem. Det er greit for testing i familien. Når spillet skal selges, pakker vi det inn som en ekte App Store-app (Capacitor + Xcode på Mac + Apple Developer-konto).
- Stemmene er laget i ElevenLabs. De få replikkene som ikke er spilt inn ennå, leses av iPadens innebygde stemme til de er på plass.
- Klistremerkene og innstillingene lagres på iPaden og blir værende selv om appen lukkes.
