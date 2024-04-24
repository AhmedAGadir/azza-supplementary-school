import { readFile } from 'fs/promises'
import path from 'path'

export async function GET({ params }) {
  const filename = params.filename
  // Assuming the file is located in the public directory
  const filePath = path.join(process.cwd(), 'public', filename)

  const buffer = await readFile(filePath)

  // Set the headers to tell the browser to download the file
  const headers = new Headers()
  headers.append('Content-Disposition', `attachment; filename="${filename}"`)
  headers.append('Content-Type', 'application/zip') // Adjust the Content-Type as needed

  return new Response(buffer, {
    headers,
  })
}
