## Live Demo
[rohan175.github.io/ngExpenseManager](rohan175.github.io/ngExpenseManager)

## Architecture
As we had talked on architecture. I experimented with multiple projects and have finalized one.

Started with lazy components, as they would be base on any real world app.

Angular arch :
-> Main   (/Core)
-> Lazy   (/features)
-> Shared (/Shared)

each of the above would be a module.
Shared will be shared even for lazy loaded components.
Hence we can't have shared services. Else directives,components, pipes.

Features can be considered as main pages.
Each will have their own route as well as can have more lazy nested components

redux:

As we are keeping lazy in prioority as well as app will be segreated in terms of features and components.
I am not an advocate of sinlge store folder which includes everything, reducers,actions,selectors

I find it much more understanable and developer frndly to have reducers,actions at feature lvl.

State for lazy features would be shared in extended interface manner.

Have merged my previous little experiment of understanding angular to this architecture.

Although much work needs to be done for networking and services.

This arch is ready for a in memory, no network, lazily loading project!!

## Game Starts now!

State Normalzied 😊👌
https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape

lazy loaded components 😐

ngrx router ❤

Selectors !! 😢
mapping selectors data caching won't work

Batch actions ? 🤢
https://github.com/tshelburne/redux-batched-actions
https://github.com/tshelburne/redux-batched-actions
Lazy loaded actions will fail with batch actions anyway


## 🤔🤔🤔
Tempalte Variables ?

Participant Menu 🤔

If expense are shared => Multiple deletes 😌

html template autocomplete for ts models?

minTransLogic
Selector component pattern? LazyLoading 😋
Prevent recalculation 🤔

Maybe gredy logic is not good enough
https://stackoverflow.com/questions/877728/what-algorithm-to-use-to-determine-minimum-number-of-actions-required-to-get-the/

I can select a lazy loaded component at app lvl 🤕🤒😷 (selecting setting from state)

still can't check import export modules..How to test ? (in production)

Different model for view? any?



## Experiment With
- Different Participants for each Grp
- Controlled UnControlled Components With Input
- Tab Route -> Lazy loaded components are rotue


## Genertors ?
( Need of custom generators for entity ->  seperate state file ,selector.ts,arry update methods,)
ng g c features/home/expenses/e-list

ng g m features/about --route about --module app.module.ts

ng g store features/home/participants -m home.module.ts

ng g entity --name features/home/groups -m home.module.ts

