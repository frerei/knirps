# ⚔️ Knirps – Munchkin Counter PWA
Disclaimer: Not a PWA yet…

## 🤷‍♀️ What is this all about?

This repo containts a simple app that enables you to counter level and bonus for up to eight players on a table. It mainly serves the purpos of teaching myself how to build an React application and making it available as a progressive web app.

I try to keep the used packages as simple as possible as I want to understand how things work without using unnecessary amounts of npm packages.

### Used technologies (so far)
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

#### Oct 6, 2018
- Introduced React Context over Reworm to basically reduce the number of external Packages and better understand react
- Introduced lodash for random avatars
- Randome code cleanup

#### Aug 18, 2018
- Improved styling of the components


## 🏁 Planned next steps

- [ ] Refactor Code 
  - Change `any` typings to real typings
  - Resolve all @ts-ignore shortcuts
  - Remove console logs
- [ ] Introduce prettier
- [ ] Introduce Docz

## 🏁 Next milestones
- [ ] Persist data on local machine
- [ ] Make app available offline (pwa)
- [ ] Sync app in database (firebase?) to work collaborative on multiple devices
- [ ] Translate App to React Native

---

## ✅ Done
- [x] Create a README.md
- [x] Introduce Context Api

## 🙌 Thanks to
[@markusoelhafen](https://github.com/markusoelhafen/) - for the [README.md](https://github.com/markusoelhafen/todo-app-pwa/blob/master/README.md) format