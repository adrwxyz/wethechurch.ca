# @westegg/gatsby-theme-core-starter

> A slim, trim, MDX powered, Gatsby starter with CI builds, Renovate bot automatic updates, and easy publishing with Github Pages

# Built on [Westegg](http://repo.westegg.xyz)

# Getting Starter

- Create new repo using this one as starter

* Setup Github Actions
  - Go to your Github account `Settings / Developer settings / Personal access tokens`
  - Create one named off your new repo and copy the token
  - Go to your new repo `Settings / Secrets` and create one with key `ACCESS_TOKEN` and the token as the value
* Setup Github Pages
  - Edit `CNAME` file in repo to your domain without `https://` prefix
  - Go to your repo `Settings / Options / Github Pages`
  - Set `Source` as `gh-pages branch`
  - Set `Custom domain` to your domain
  - Update your domain provider with the following records (optionally replace `@` with a subdomain)
    ```
    CNAME       @       {github username}.github.io.
    A           @       185.199.108.153
    A           @       185.199.109.153
    A           @       185.199.110.153
    A           @       185.199.111.153
    ```
  - Turn on `Enforce HTTPS` once your DNS records are updated
* Setup Renovate Bot for automatic dependency upgrades
  * [Configure here](https://github.com/apps/renovate) and add permissions for your new repo
