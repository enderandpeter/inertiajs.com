import React from 'react'
import dedent from 'dedent-js'
import { A, Code, H1, H2, Layout, Notice, P, TabbedCode } from '@/Components'

const meta = {
  title: 'Links',
  links: [
    { url: '#top', name: 'Introduction' },
    { url: '#creating-links', name: 'Creating links' },
    { url: '#method', name: 'Method' },
    { url: '#data', name: 'Data' },
    { url: '#headers', name: 'Headers' },
    { url: '#replace', name: 'Replace' },
    { url: '#preserve-state', name: 'Preserve state' },
    { url: '#preserve-scroll', name: 'Preserve scroll' },
    { url: '#partial-reloads', name: 'Partial reloads' },
    { url: '#active-states', name: 'Active states' },
  ],
}

const Page = () => {
  return (
    <>
      <H1>Links</H1>
      <P>
        To create links within an Inertia app you'll need to use the Inertia link component. This is a light wrapper
        around a standard anchor <Code>{'<a>'}</Code> link that intercepts click events and prevents full page reloads
        from occurring. This is how Inertia provides a single-page app experience.
      </P>
      <H2>Creating links</H2>
      <P>
        To create an Inertia link, use the Inertia <Code>{'<Link>'}</Code> component. Note, any attributes you provide
        will be proxied to the underlying tag.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/">Home</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/">Home</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/">Home</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <a href="/" use:inertia>Home</a>\n
              <Link href="/">Home</Link>
            `,
            description: 'The use:inertia directive can be applied to any HTML element.',
          },
        ]}
      />
      <P>
        By default Inertia renders links as anchor <Code>{'<a>'}</Code> elements. However, you can change the tag using
        the <Code>as</Code> attribute.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/logout" method="post" as="button" type="button">Logout</Link>\n
              // Renders as:
              <button type="button">Logout</button>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/logout" method="post" as="button" type="button">Logout</Link>\n
              // Renders as:
              <button type="button">Logout</button>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/logout" method="post" as="button" type="button">Logout</Link>\n
              // Renders as:
              <button type="button">Logout</button>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia } from '@inertiajs/inertia-svelte'\n
              <button use:inertia="{{ href: '/logout', method: 'post' }}" type="button">Logout</button>\n
              // Renders as:
              <button type="button">Logout</button>
            `,
            description:
              'Svelte does not support dynamic elements yet, but you can use the inertia directive to achieve the same results.',
          },
        ]}
      />
      <Notice>
        Creating <Code color="orange">POST</Code>/<Code color="orange">PUT</Code>/<Code color="orange">PATCH</Code>/
        <Code color="orange">DELETE</Code> anchor <Code color="orange">{'<a>'}</Code> links is discouraged as it causes
        "Open Link in New Tab/Window" accessibility issues. Instead, consider using a more appropriate element, such as
        a <Code color="orange">{'<button>'}</Code>.
      </Notice>
      <H2>Method</H2>
      <P>
        You can specify the method for an Inertia link request. The default is <Code>GET</Code>, but you can also use{' '}
        <Code>POST</Code>, <Code>PUT</Code>, <Code>PATCH</Code>, and <Code>DELETE</Code>.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/logout" method="post">Logout</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/logout" method="post">Logout</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/logout" method="post">Logout</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <a href="/logout" use:inertia="{{ method: 'post' }}">Logout</a>\n
              <Link href="/logout" method="post">Logout</Link>
            `,
          },
        ]}
      />
      <H2>Data</H2>
      <P>
        You can add data using the <Code>data</Code> attribute. This can be an <Code>object</Code>, or a{' '}
        <Code>FormData</Code> instance.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/endpoint" method="post" :data="{ foo: bar }">Save</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/endpoint" method="post" :data="{ foo: bar }">Save</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/endpoint" method="post" data={{ foo: bar }}>Save</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-svelte'\n
              <Link href="/endpoint" method="post" data={{ foo: bar }}>Save</Link>
            `,
          },
        ]}
      />
      <H2>Headers</H2>
      <P>
        The <Code>headers</Code> option allows you to add custom headers to an Inertia link. Do note that Inertia's
        headers take priority and therefore cannot be overwritten.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/endpoint" :headers="{ foo: bar }">Save</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/endpoint" :headers="{ foo: bar }">Save</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/endpoint" headers={{ foo: bar }}>Save</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <button use:inertia="{{ href: '/endpoint', headers: { foo: bar } }}">Save</button>\n
              <Link href="/endpoint" headers={{ foo: bar}}>Save</Link>
            `,
          },
        ]}
      />
      <H2>Replace</H2>
      <P>
        You can specify the browser history behaviour. By default page visits push (new) state (
        <Code>window.history.pushState</Code>) into the history, however it's also possible to replace state (
        <Code>window.history.replaceState</Code>) by setting the <Code>replace</Code> attribute to true. This will cause
        the visit to replace the current history state, instead of adding a new history state to the stack.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/" replace>Home</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/" replace>Home</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link replace href="/">Home</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <a href="/" use:inertia="{{ replace: true }}">Home</a>\n
              <Link href="/" replace>Home</Link>
            `,
          },
        ]}
      />
      <H2>Preserve state</H2>
      <P>
        You can preserve a page component's local state using the <Code>preserve-state</Code> attribute. This will
        prevent a page component from fully re-rendering. This is especially helpful with forms, since you can avoid
        manually repopulating input fields, and can also maintain a focused input.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <input v-model="query" type="text" />\n
              <Link href="/search" :data="{ query }" preserve-state>Search</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <input v-model="query" type="text" />\n
              <Link href="/search" :data="{ query }" preserve-state>Search</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <input onChange={this.handleChange} value={query} />\n
              <Link href="/search" data={query} preserveState>Search</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <input on:change={handleChange} value={query} />\n
              <button use:inertia="{{ href: '/search', data: query, preserveState: true }}">Search</button>\n
              <Link href="/search" data={query} preserveState>Search</Link>
            `,
          },
        ]}
      />
      <H2>Preserve scroll</H2>
      <P>
        You can use the <Code>preserve-scroll</Code> attribute to prevent Inertia from automatically resetting the
        scroll position when making the visit.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/" preserve-scroll>Home</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/" preserve-scroll>Home</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link preserveScroll href="/">Home</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <a href="/" use:inertia="{{ preserveScroll: true }}">Home</a>\n
              <Link href="/" preserveScroll>Home</Link>
            `,
          },
        ]}
      />
      <P>
        For more information, see the <A href="/scroll-management">scroll management</A> page.
      </P>
      <H2>Partial reloads</H2>
      <P>
        The <Code>only</Code> option allows you to request a subset of the props (data) from the server on subsequent
        visits to the same page.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              <Link href="/users?active=true" :only="['users']">Show active</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue3'\n
              <Link href="/users?active=true" :only="['users']">Show active</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-react'\n
              <Link href="/users?active=true" only={['users']}>Show active</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { inertia, Link } from '@inertiajs/inertia-svelte'\n
              <a href="/users?active=true" use:inertia="{{ only: ['users'] }}">Show active</a>\n
              <Link href="/users?active=true" only={['users']}>Show active</Link>
            `,
          },
        ]}
      />
      <P>
        For more information, see the <A href="/partial-reloads">partial reloads</A> page.
      </P>
      <H2>Active states</H2>
      <P>
        It's often desireable to set an active state for navigation links based on the current page. This can be done in
        Inertia using the <Code>page</Code> object by doing string comparisons against the <Code>page.url</Code> and{' '}
        <Code>page.component</Code> properties.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue 2',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              // URL exact match
              <Link href="/users" :class="{ 'active': $page.url === '/users' }">Users</Link>\n
              // Component exact match
              <Link href="/users" :class="{ 'active': $page.component === 'Users/Index' }">Users</Link>\n
              // URL starts with (/users, /users/create, /users/1, etc.)
              <Link href="/users" :class="{ 'active': $page.url.startsWith('/users') }">Users</Link>\n
              // Component starts with (Users/Index, Users/Create, Users/Show, etc.)
              <Link href="/users" :class="{ 'active': $page.component.startsWith('Users') }">Users</Link>
            `,
          },
          {
            name: 'Vue 3',
            language: 'jsx',
            code: dedent`
              import { Link } from '@inertiajs/inertia-vue'\n
              // URL exact match
              <Link href="/users" :class="{ 'active': $page.url === '/users' }">Users</Link>\n
              // Component exact match
              <Link href="/users" :class="{ 'active': $page.component === 'Users/Index' }">Users</Link>\n
              // URL starts with (/users, /users/create, /users/1, etc.)
              <Link href="/users" :class="{ 'active': $page.url.startsWith('/users') }">Users</Link>\n
              // Component starts with (Users/Index, Users/Create, Users/Show, etc.)
              <Link href="/users" :class="{ 'active': $page.component.startsWith('Users') }">Users</Link>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
              import { usePage } from '@inertiajs/inertia-react'\n
              const { url, component } = usePage()\n
              // URL exact match
              <Link href="/users" className={url === '/users' ? 'active' : ''}>Users</Link>\n
              // Component exact match
              <Link href="/users" className={component === 'Users/Index' ? 'active' : ''}>Users</Link>\n
              // URL starts with (/users, /users/create, /users/1, etc.)
              <Link href="/users" className={url.startsWith('/users') ? 'active' : ''}>Users</Link>\n
              // Component starts with (Users/Index, Users/Create, Users/Show, etc.)
              <Link href="/users" className={component.startsWith('Users') ? 'active' : ''}>Users</Link>
            `,
          },
          {
            name: 'Svelte',
            language: 'jsx',
            code: dedent`
              import { page } from '@inertiajs/inertia-svelte'\n
              // URL exact match
              <Link href="/users" class={$page.url === '/users' ? 'active' : ''}>Users</Link>\n
              // Component exact match
              <Link href="/users" class={$page.component === 'Users/Index' ? 'active' : ''}>Users</Link>\n
              // URL starts with (/users, /users/create, /users/1, etc.)
              <Link href="/users" class={$page.url.startsWith('/users') ? 'active' : ''}>Users</Link>\n
              // Component starts with (Users/Index, Users/Create, Users/Show, etc.)
              <Link href="/users" class={$page.component.startsWith('Users') ? 'active' : ''}>Users</Link>
            `,
          },
        ]}
      />
      <P>
        You can do exact matches (<Code>===</Code>), or <Code>startsWith()</Code> checks (useful for matching a subset
        of pages), or even more complex comparisons using regular expressions.
      </P>
      <P>
        What's nice about this approach is that you're not limited to just setting class names. You can use this
        technique to conditionally render any markup on active state, such as different link text, or even an SVG icon.
      </P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
