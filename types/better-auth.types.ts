export interface User {
  name: string;
  email: string;
  image?: string;
}

export interface Member {
  createdAt: Date;
  id: string;
  organizationId: string;
  role: string;
  teamId?: string;
  user: User;
  userId: string;
}

export type OrganizationRole = 'member' | 'admin' | 'owner';

export interface Invitation {
  id: string;
  organizationId: string;
  email: string;
  role: OrganizationRole;
  teamId?: string;
  status: string;
  inviterId: string;
  expiresAt: Date;
}

export interface OrganizationMetaData {
  description: string;
}

export interface FullOrganization {
  createdAt: Date;
  id: string;
  invitations: Invitation[];
  logo?: string | null;
  metadata?: string;
  name: string;
  slug: string;
  members: Member[];
}

export interface OrganizationInvitee {
  email: string;
  role: OrganizationRole;
  id: string;
}
