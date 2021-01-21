import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/functions/layout'
import SnackbarComponent from '../../components/Snackbar'
import BookInformation from '../../components/BookInformation'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'
import routes from '../../routes'
import './style.css'

const Default = ({ mobile, alert, changeDevice, changeAlert }) => {
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
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                exact={true}
                                component={prop.component}
                            />
                        )
                    })}
                </Switch>
                <SnackbarComponent config={alert} setConfig={changeAlert} />
            </main>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)