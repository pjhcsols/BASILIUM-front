import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Under1 } from './Under/Under1'
import { Upper } from './Upper/Upper'

import { AnimatePresence } from 'framer-motion'

function ListRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/shop/Upper" element={<Upper />} />
                <Route path="/shop/Under" element={<Under1 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default ListRoutes