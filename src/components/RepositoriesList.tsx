import React, {FormEvent, useState} from 'react';
import {useStore, useDispatch} from "react-redux";
import useActions from "./../hooks/useActions";
// import {useSelector} from "react-redux";
// import {RootState} from "../store";
import {useTypedSelector} from "../hooks/useTypedSelector";

// import {ActionCreators} from "./../store";

const RepositoriesList : React.FC = () => {
    const {searchRepositories} = useActions();

    // const {error, loading, data} = useSelector((state : RootState) => state.repositories);

    const {error, loading, data} = useTypedSelector((state) => state.repositories);

    const [term, setTerm] = useState('');

    const dispatch = useDispatch();

    const store = useStore();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // dispatch(ActionCreators.searchRepositories(term) as any);
        searchRepositories(term);
    }

    return <>
        <form onClick={onSubmit}>
            <input type={"text"} onChange={e => setTerm(e.target.value)} />
            <button >search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>error</p>}
        {!loading && !error && data && data.map(item => <li>{item}</li>)}
    </>
}

export default RepositoriesList;