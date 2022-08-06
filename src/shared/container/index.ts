import { container } from 'tsyringe'

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/infra/repositories/CategoriesRepository'

import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/repositories/SpecificationsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
