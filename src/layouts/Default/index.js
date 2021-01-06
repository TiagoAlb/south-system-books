import React, { useEffect, useState } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'
import routes from '../../routes'
import './style.css'

export default () => {
    const [transparentHeader, setTransparentHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                console.log('altera para branco')
                setTransparentHeader(true);
            } else {
                setTransparentHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className='content'>
            <Header white={transparentHeader} />
            <Outdoor />
            <main className='default-main'>
                <Switch>
                    {routes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />
                        else return (
                            <Route
                                path={prop.path}
                                key={key}
                                exact={true}
                                render={(props) => <prop.component  {...props} />}
                            />
                        )
                    })}
                </Switch>
            </main>
        </div>
    )
}