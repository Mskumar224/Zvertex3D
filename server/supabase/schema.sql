-- Zvertex3D Supabase PostgreSQL schema. Run once in Supabase SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.vendors (
  id uuid primary key default gen_random_uuid(), name text not null, email text not null, phone text, city text,
  store_name text not null, slug text not null unique, tagline text, description text,
  status text not null default 'pending' check (status in ('pending','approved','suspended')),
  featured boolean not null default false, rating numeric(3,2) not null default 5,
  products jsonb not null default '[]'::jsonb, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(), name text, email text not null unique, password_hash text not null,
  role text not null default 'customer' check (role in ('admin','customer','vendor')),
  vendor_id uuid references public.vendors(id) on delete set null, status text not null default 'active' check (status in ('active','disabled')),
  email_verified boolean not null default false, verification_token_hash text, verification_expires_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.model_assets (
  id uuid primary key default gen_random_uuid(), original_name text, mime_type text not null default 'model/stl', stl_base64 text not null,
  width numeric, depth numeric, height numeric, vertices integer, source_width integer, source_height integer,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(), order_number text not null unique, customer jsonb not null default '{}'::jsonb,
  vendor_id uuid not null references public.vendors(id), asset_id uuid not null references public.model_assets(id),
  configuration jsonb not null default '{}'::jsonb, estimated_price numeric(12,2) default 0,
  status text not null default 'requested' check (status in ('requested','accepted','in_production','shipped','completed','cancelled')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index if not exists idx_vendors_status on public.vendors(status);
create index if not exists idx_vendors_featured on public.vendors(featured);
create index if not exists idx_orders_vendor on public.orders(vendor_id);
create index if not exists idx_orders_asset on public.orders(asset_id);
create index if not exists idx_users_vendor on public.users(vendor_id);
alter table public.vendors enable row level security;
alter table public.users enable row level security;
alter table public.model_assets enable row level security;
alter table public.orders enable row level security;
create or replace function public.set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at=now(); return new; end; $$;
drop trigger if exists vendors_set_updated_at on public.vendors;
create trigger vendors_set_updated_at before update on public.vendors for each row execute function public.set_updated_at();
drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at before update on public.users for each row execute function public.set_updated_at();
drop trigger if exists model_assets_set_updated_at on public.model_assets;
create trigger model_assets_set_updated_at before update on public.model_assets for each row execute function public.set_updated_at();
drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at before update on public.orders for each row execute function public.set_updated_at();
