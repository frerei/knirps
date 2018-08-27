# ⚔️ Knirps – Munchkin Counter PWA
Disclaimer: Not a PWA yet…

## 🤷‍♀️ What is this all about?

This repo containts a simple app that enables you to counter level and bonus for up to eight players on a table. It mainly serves the purpos of teaching myself how to build an React application and making it available as a progressive web app.

I try to keep the used packages as simple as possible as I want to understand how things work without using unnecessary amounts of npm packages.

### Used technologies (I want to learn)
- React
- create-react-app-ts
- Typescript
- styled-components
- docz

## 🚀 Get it running

### 1. Clone repository
via ssh: 
```
git clone git@github.com:frederikreiss/knirps.git
cd knirps
```

### 2. Add dependecies:
`yarn install`

### 3. Start Application:
`yarn start`

## 📆 What happened so far

#### Aug 18, 2018
- Improved resonsive styling of the components
- Added timestamp to the data object as a temporary uuid replacement, as with the arr.length used as a key on the datarow it created conflicts when one element was deleted and a new one (then with a duplicate key) was added. Resulting in the app to crash
- Used the worst commit messages one could imagine, need to improve on that (and be strict)

## 🏁 Planned next steps

- [ ] Refactor Code 
  - Change `any` typings to real typings
  - Resolve all @ts-ignore shortcuts
  - Remove console logs
- [ ]
- [ ] Introduce prettier
- [ ] Introduce Docz

## 🏁 Next milestones
- [ ] Persist data on local machine
- [ ] Make app available offline (pwa)
- [ ] Sync app in database (firebase?) to work collaborative on multiple devices

---

## ✅ Done
- [x] Create a README.md

## 🙌 Thanks to
[@markusoelhafen](https://github.com/markusoelhafen/) - for the [README.md](https://github.com/markusoelhafen/todo-app-pwa/blob/master/README.md) format