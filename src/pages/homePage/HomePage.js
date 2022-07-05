import React from 'react'
import Header from '../../components/Header'
import Search from '../homePage/componenets/Search'
import Category from '../homePage/componenets/Category'
import Card from '../homePage/componenets/Card'

export const HomePage = () => {
    return (
        <>
            <Header>
                <h1 className="font-extrabold text-base">Welcome</h1>
                <h1 className="font-semibold text-base">Bali, Indonesia</h1>
                <p className="font-medium text-xs">Top Rental</p>
            </Header>
            <Search />
            <Category />
            <main className="mt-4 md:flex flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </>
    )
}

export default HomePage
