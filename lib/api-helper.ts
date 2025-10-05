// Helper functions for API calls

export async function getContent(key?: string) {
  try {
    const url = key ? `/api/content?key=${key}` : '/api/content';
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch content');
    return await response.json();
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}

export async function updateContent(key: string, value: any) {
  try {
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, value }),
    });
    if (!response.ok) throw new Error('Failed to update content');
    return await response.json();
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
}

export async function getMessages() {
  try {
    const response = await fetch('/api/messages');
    if (!response.ok) throw new Error('Failed to fetch messages');
    return await response.json();
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}

export async function deleteMessage(id: string) {
  try {
    const response = await fetch(`/api/messages?id=${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete message');
    return await response.json();
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
}

export async function markMessageAsRead(id: string, isRead: boolean) {
  try {
    const response = await fetch('/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, isRead }),
    });
    if (!response.ok) throw new Error('Failed to update message');
    return await response.json();
  } catch (error) {
    console.error('Error updating message:', error);
    throw error;
  }
}
