import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { Switch, Redirect, Route } from 'react-router-dom'
import BookInformation from '../../components/BookInformation'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'
import routes from '../../routes'
import store from '../../store'
import './style.css'

export default () => {
    const [transparentHeader, setTransparentHeader] = useState(false);
    const [reducedLogo, setReducedLogo] = useState(window.innerWidth < 500 ? true : false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
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

    useEffect(() => {
        const sizeListener = () => {
            if (window.innerWidth < 500) {
                setReducedLogo(true);
            } else {
                setReducedLogo(false);
            }
        }

        window.addEventListener('resize', sizeListener);

        return () => {
            window.removeEventListener('resize', sizeListener);
        }
    }, []);

    return (
        <div className='content'>
            <Provider store={store}>
                <Header white={transparentHeader} reducedLogo={reducedLogo} />
                <Outdoor />
                <main className='default-main'>
                    <BookInformation />
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
            </Provider>
        </div>
    )
}