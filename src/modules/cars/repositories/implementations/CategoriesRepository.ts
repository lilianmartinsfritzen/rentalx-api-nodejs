import { getRepository, Repository } from "typeorm"
import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"

class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.repository = getRepository(Category)
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }
