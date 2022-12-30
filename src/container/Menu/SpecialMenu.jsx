/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';
import 'animate.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding animate__animated animate__slideInUp" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Styles that fits your palatte" />
      <h1 className="headtext__cormorant">Ctalo&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="size">
      <p className="app__specialMenu-menu_heading">Ctalo Size Chart</p>
        <table style={{ marginTop: '20px' }}>
          <tr>
            <th>
              size
            </th>
            <th>
              Burst
            </th>
            <th>
              Waist
            </th>
            <th>
              Hip
            </th>
          </tr>
          <tr>
            <td>6</td>
            <td>32</td>
            <td>26</td>
            <td>36</td>
          </tr>
          <tr>
            <td>8</td>
            <td>34</td>
            <td>28</td>
            <td>38</td>
          </tr>
          <tr>
            <td>10</td>
            <td>36</td>
            <td>30</td>
            <td>40</td>
          </tr>
          <tr>
            <td>12</td>
            <td>38</td>
            <td>32</td>
            <td>42</td>
          </tr>
          <tr>
            <td>14</td>
            <td>40</td>
            <td>34</td>
            <td>45</td>
          </tr>
          <tr>
            <td>16</td>
            <td>43</td>
            <td>36</td>
            <td>48</td>
          </tr>
          <tr>
            <td>18</td>
            <td>46</td>
            <td>38</td>
            <td>51</td>
          </tr>
          <tr>
            <td>20</td>
            <td>49</td>
            <td>40</td>
            <td>53</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
);

export default SpecialMenu;
