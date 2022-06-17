"""empty message

Revision ID: aeef0ffaf586
Revises: c843c0737c95
Create Date: 2022-06-14 17:03:07.448470

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aeef0ffaf586'
down_revision = 'c843c0737c95'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('info_plant', sa.Column('imagen', sa.String(length=250), nullable=True))
    op.add_column('info_plant', sa.Column('periodo_invierno', sa.Integer(), nullable=True))
    op.add_column('info_plant', sa.Column('periodo_verano', sa.Integer(), nullable=True))
    op.add_column('info_plant', sa.Column('tipo', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('info_plant', 'tipo')
    op.drop_column('info_plant', 'periodo_verano')
    op.drop_column('info_plant', 'periodo_invierno')
    op.drop_column('info_plant', 'imagen')
    # ### end Alembic commands ###
