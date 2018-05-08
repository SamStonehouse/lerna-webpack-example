
import React, { PureComponent } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import ComponentRoot from './basic-components/component-root';
import ComponentA from './basic-components/component-a';
import ComponentB from './basic-components/component-b';
import ComponentC from './basic-components/component-c';
import NoMatch from './basic-components/no-match';

class App extends PureComponent {

	calculate() {
		console.log('');
	}

	render() {
		return (
			<div>
				<header>
					<h1>Example Nested Routes</h1>
					<ul>
						<li><NavLink to='/'>/</NavLink></li>
						<li><NavLink to='/a'>/a</NavLink></li>
						<li><NavLink to='/b'>/b</NavLink></li>
						<li><NavLink to='/c'>/c</NavLink></li>
						<li><NavLink to='/no'>/no</NavLink></li>
					</ul>
				</header>
				<section>
					<Switch>
						<Route exact path='/' component={ComponentRoot} />
						<Route path='/a' component={ComponentA} />
						<Route path='/b' component={ComponentB} />
						<Route path='/c' component={ComponentC} />
						<Route component={NoMatch} />
					</Switch>
				</section>
			</div>
		);
	}
}

export default App;
