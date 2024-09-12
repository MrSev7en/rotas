type Format = 'date' | 'datetime' | 'money' | 'plate';

export function Formatter<T = any>(format: Format, value: T): string {
  switch (format) {
    case 'date': {
      const now = new Date();
      const date = new Date(value as string);
      const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

      if (seconds < 60) return 'agora mesmo';
      if (minutes < 1) return 'há menos de 1 minuto';
      if (minutes === 1) return 'há 1 minuto';
      if (minutes < 60) return `há ${minutes} minutos`;
      if (hours === 1) return 'há 1 hora';
      if (hours < 24) return `há ${hours} horas`;
      if (days === 1) return 'há 1 dia';
      if (days < 30) return `há ${days} dias`;
      if (months === 1) return 'há 1 mês';
      if (months < 12) return `há ${months} meses`;
      if (years === 1) return 'há 1 ano';
      return `há ${years} anos`;
    }

    case 'datetime': {
      const seconds = Number(value);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      if (hours < 1) {
        if (minutes === 0) return 'menos de 1 minuto';
        if (minutes === 1) return '1 minuto';
        return `${minutes} minutos`;
      }

      if (hours === 1) {
        if (minutes === 0) return '1 hora';
        if (minutes === 1) return '1 hora e 1 minuto';
        return `1 hora e ${minutes} minutos`;
      }

      if (hours < 24) {
        if (minutes === 0) return `${hours} horas`;
        if (minutes === 1) return `${hours} horas e 1 minuto`;
        return `${hours} horas e ${minutes} minutos`;
      }

      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;

      if (days === 1) {
        if (remainingHours === 0) return '1 dia';
        if (remainingHours === 1) return '1 dia e 1 hora';
        return `1 dia e ${remainingHours} horas`;
      }

      if (days < 30) {
        if (remainingHours === 0) return `${days} dias`;
        if (remainingHours === 1) return `${days} dias e 1 hora`;
        return `${days} dias e ${remainingHours} horas`;
      }

      return 'Mais de 30 dias';
    }

    case 'money': {
      const parsed = String(value)
        .replace('.', '')
        .replace(',', '')
        .replace(/\D/g, '');

      const result = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
      }).format(Number.parseFloat(parsed) / 100);

      return `R$ ${result === 'NaN' ? '0,00' : result}`;
    }

    case 'plate': {
      const text = String(value);
      const firstThreeDigits = text.slice(0, 3);
      const lastDigits = text.slice(3);

      return `${firstThreeDigits}-${lastDigits}`;
    }
  }
}
