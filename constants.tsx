
import React from 'react';
import { Service, PortfolioItem, Feature } from './types';

export const SERVICES: Service[] = [
  {
    id: 'link-bio',
    title: 'Link na Bio Premium',
    description: 'Sua primeira impressão digital elevada ao nível profissional. Um hub estratégico de links que carrega instantaneamente, garantindo que nenhum seguidor se perca no caminho.',
    icon: '📱',
    features: ['Carregamento Instantâneo', 'Design Personalizado', 'Analytics de Cliques'],
    tier: 'express'
  },
  {
    id: 'landing-page',
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas de vendas construídas com foco obsessivo em ROI. Unimos design persuasivo a um código ultra-leve para que cada clique tenha a chance máxima de virar lucro.',
    icon: '🎯',
    features: ['Foco em Lead Generation', 'Otimização Mobile-First', 'Integração com CRM'],
    tier: 'standard'
  },
  {
    id: 'institutional',
    title: 'Sites Institucionais de Autoridade',
    description: 'A vitrine digital que sua empresa merece. Desenvolvemos sites robustos, seguros e otimizados para o Google, transmitindo a confiança necessária para fechar grandes contratos.',
    icon: '🏢',
    features: ['Arquitetura SEO', 'Gestão de Conteúdo Fácil', 'Segurança de Dados'],
    tier: 'premium'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce e Plataformas Robustas',
    description: 'Sua loja aberta 24h em uma estrutura estável e escalável. Experiência de compra fluida e checkout seguro, preparada para suportar picos de tráfego sem lentidão ou quedas.',
    icon: '🛒',
    features: ['Checkout Otimizado', 'Escalabilidade de Tráfego', 'Painel Administrativo'],
    tier: 'enterprise'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'clean-code',
    title: 'Engenharia de Performance',
    description: 'Não usamos "templates" prontos. Cada linha de código é escrita para ser leve, segura e fácil de manter ao longo dos anos.',
    icon: '💻'
  },
  {
    id: 'performance',
    title: 'Velocidade que Vende',
    description: 'Sites lentos perdem clientes. Garantimos pontuação máxima nos testes de velocidade do Google para que seu usuário nunca espere.',
    icon: '⚡'
  },
  {
    id: 'support',
    title: 'Consultoria Direta',
    description: 'Você fala direto com quem constrói. Do planejamento à entrega, você tem um parceiro técnico para guiar suas decisões digitais.',
    icon: '🤝'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'V Project',
    category: 'Software House',
    imageUrl: '/v-project-mockup.png',
    description: 'Identidade visual e tecnologia para alta performance.'
  },
  {
    id: '2',
    title: 'Corte Vip',
    category: 'Institucional',
    imageUrl: '/corte-vip-institucional.png',
    description: 'Plataforma de agendamento e presença digital.'
  },
  {
    id: '3',
    title: 'Lost Ice',
    category: 'E-commerce',
    imageUrl: '/lost-ice-mockup.png',
    description: 'Loja virtual com experiência de compra imersiva.'
  },
  {
    id: '4',
    title: 'Kemer Contabilidade',
    category: 'Corporativo',
    imageUrl: '/kemer-contabilidade.png',
    description: 'Site institucional focado em autoridade e leads.'
  },
  {
    id: '5',
    title: 'Panela Mineira',
    category: 'App Delivery',
    imageUrl: '/panela-mineira-mobile.png',
    description: 'Aplicação móvel para delivery de gastronomia.'
  }
];
