import { ofType } from 'redux-observable';
import { map, mapTo, mergeMap } from 'rxjs/operators';
// import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const a = [];

for(let i=0; i < 20; i++){
    a.push(
        ajax(
            {
                url: 'https://jsonplaceholder.typicode.com/posts',
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
    ofType('DUMMY_ACTION'),
    mergeMap(
        action => ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                map(payload => ({type: 'DATA', payload}))
            )
    )
);