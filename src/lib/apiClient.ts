// src/lib/apiClient.ts

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:1337/api';

// 支持重试的 fetch 封装
async function apiFetch<T>(
  input: string,
  init?: RequestInit,
  retries = 3
): Promise<T> {
  const url = input.startsWith('http') ? input : `${API_BASE}${input}`;
  
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          ...init?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json() as T;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)));
    }
  }
  
  throw new Error('Max retries exceeded');
}

export { apiFetch, API_BASE };