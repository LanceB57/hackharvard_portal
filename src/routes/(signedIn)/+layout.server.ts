import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load = (({ locals }) => {
  if (locals.user === null) {
    throw redirect(301, '/signin')
  }
  return {
    user: locals.user,
  }
}) satisfies LayoutServerLoad
