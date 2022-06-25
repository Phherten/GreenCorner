"""empty message

Revision ID: 157c086cf5cf
Revises: 43e09bd5fdb5
Create Date: 2022-06-25 09:36:46.510533

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '157c086cf5cf'
down_revision = '43e09bd5fdb5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('infoplant_misplantas_fkey', 'infoplant', type_='foreignkey')
    op.drop_column('infoplant', 'misplantas')
    op.add_column('misplantas', sa.Column('user_id', sa.Integer(), nullable=True))
    op.add_column('misplantas', sa.Column('plant_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'misplantas', 'user', ['user_id'], ['id'])
    op.create_foreign_key(None, 'misplantas', 'infoplant', ['plant_id'], ['id'])
    op.drop_constraint('user_misplantas_fkey', 'user', type_='foreignkey')
    op.drop_column('user', 'misplantas')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('misplantas', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('user_misplantas_fkey', 'user', 'misplantas', ['misplantas'], ['id'])
    op.drop_constraint(None, 'misplantas', type_='foreignkey')
    op.drop_constraint(None, 'misplantas', type_='foreignkey')
    op.drop_column('misplantas', 'plant_id')
    op.drop_column('misplantas', 'user_id')
    op.add_column('infoplant', sa.Column('misplantas', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('infoplant_misplantas_fkey', 'infoplant', 'misplantas', ['misplantas'], ['id'])
    # ### end Alembic commands ###