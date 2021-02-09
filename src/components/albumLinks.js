import React from 'react'
import { Link } from 'gatsby'
import '../css/albumLinks.css'

const AlbumLinks = () => (
  <ul className='album-links-list'>
    <li className='album-links-list-title'>Travel</li>
    <li className='album-links-list-item'><Link to='/kyrgyzstan-and-kazakhstan-2016'>Kazakhstan & Krygyzstan (2016)</Link></li>
    <li className='album-links-list-item'><Link to='/malta-2017'>Malta (2017)</Link></li>
    <li className='album-links-list-item'><Link to='/fujian-2017'>Fujian (2017)</Link></li>
    <li className='album-links-list-item'><Link to='/luxembourg-2018'>Luxembourg (2018)</Link></li>
    <li className='album-links-list-title'>Events</li>
    <li className='album-links-list-item'><Link to='/50th-party'>50th Party (2018)</Link></li>
    <li className='album-links-list-item'><Link to='/leaving-party'>Leaving Party (2019)</Link></li>
    <li className='album-links-list-item'><Link to='/margarita-rumble-2019'>Margarita Rumble (2019)</Link></li>
    <li className='album-links-list-title'>Street</li>
    <li className='album-links-list-item'><Link to='/manchester-street-may-2019'>Manchester (2019)</Link></li>
    <li className='album-links-list-item'><Link to='/nightlife'>Nightlife (2016)</Link></li>
    <li className='album-name-link'><Link to='/portraits'>Portraits</Link></li>
  </ul>
)

export default AlbumLinks
