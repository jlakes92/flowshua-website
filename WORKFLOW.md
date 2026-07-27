# Flowshua Website Workflow

## Canonical repository

- Local checkout: `/Users/joshualakes/Desktop/FLOWSHUA/flowshua-website`
- Canonical branch: `main`
- GitHub repository: `github.com/jlakes92/flowshua-website`
- Production website: `https://flowshua.com`

Netlify publishes the production website from the GitHub repository’s `main` branch and repository root. An approved merge into `main` normally triggers the production deployment automatically.

## Before starting work

Synchronize the canonical checkout with `origin/main` and confirm that the working tree is clean.

Do not begin new work when `main` contains uncommitted changes or is behind `origin/main`.

## Making changes

1. Create a focused feature or fix branch from the latest `main`.
2. Make and test only the changes within that branch’s stated scope.
3. Review the diff and preview the website before publishing changes.
4. Commit and push only after approval.
5. Open a pull request for review.
6. Merge the approved pull request into `main`.
7. Allow Netlify to deploy the updated `main` branch through its normal Git-based deployment process.
8. Confirm that the Netlify deployment succeeded and verify the affected pages on the production website.

Avoid direct production changes through the Netlify UI, CLI, API, or MCP unless the owner specifically approves them.

## Worktree cleanup

Temporary worktrees may be used for isolated changes. After a branch is merged:

1. Confirm the worktree is clean.
2. Confirm the branch is fully merged into `main`.
3. Remove the temporary worktree.
4. Delete the merged local branch using Git’s safe branch-deletion option.

Never force-delete a branch or remove a worktree containing uncommitted work without explicit approval.
