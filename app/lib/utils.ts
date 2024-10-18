export function generateAlphanumericCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('')
  }
  

 export const copyToClipboard = (code: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };