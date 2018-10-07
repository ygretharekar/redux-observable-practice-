import { ofType } from 'redux-observable';
import { map, mapTo, mergeMap, switchMap } from 'rxjs/operators';
// import { forkJoin,  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

let a = [];

for(let i=0; i < 20; i++){
    a.push(
        ajax(
            {
                url: 'https://jsonplaceholder.typicode.com/posts/',
                type: 'GET'
            }
        )
    );
}

export const helloEpic = action$ => action$.pipe(
    ofType('DUMMY_ACTION'),
    mapTo({type: 'CHANGE_SENTENSE'})
);

export const apiEpic = action$ => action$.pipe(
    ofType('CHANGE_SENTENSE'),
    mergeMap(
        action => ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                /* () => {
                    ajax
                        .getJSON('https://jsonplaceholder.typicode.com/posts')
                        .pipe(
                            map(payload => ({type: 'INFO', payload}))
                        )


                }, */
                map(payload => ({type: 'DATA', payload}))
            )
    )
);