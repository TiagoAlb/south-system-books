import React, { useEffect, useState } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/functions/layout'
import BookInformation from '../../components/BookInformation'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'
import routes from '../../routes'
import './style.css'

const Default = ({ mobile, changeDevice }) => {
    const [transparentHeader, setTransparentHeader] = useState(false)

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
            if (window.innerWidth < 600) {
                changeDevice(true);
            } else {
                changeDevice(false);
            }
        }

        window.addEventListener('resize', sizeListener);

        return () => {
            window.removeEventListener('resize', sizeListener);
        }
    }, []);

    return (
        <div className='content'>
            <Header white={transparentHeader} reducedLogo={mobile} />
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
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)