# MindBloom Firebase Schema (Example)

## users
- id (string, uid)
- name (string)
- email (string)
- avatarUrl (string)
- theme (string)
- createdAt (timestamp)

## moods
- id (string)
- userId (string)
- mood (string)
- intensity (number)
- notes (string)
- tags (array)
- createdAt (timestamp)

## journalEntries
- id (string)
- userId (string)
- title (string)
- content (string)
- mood (string)
- createdAt (timestamp)

## communityPosts
- id (string)
- authorId (string | anonymous)
- title (string)
- body (string)
- tags (array)
- reactions (map)
- createdAt (timestamp)
- moderationStatus (string)

## savedResources
- id (string)
- userId (string)
- resourceType (string)
- resourceId (string)
- createdAt (timestamp)
