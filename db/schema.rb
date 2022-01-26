# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_26_063844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cocktail_ingredients", force: :cascade do |t|
    t.bigint "ingredient_id"
    t.bigint "cocktail_id"
    t.string "measure"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cocktail_id"], name: "index_cocktail_ingredients_on_cocktail_id"
    t.index ["ingredient_id"], name: "index_cocktail_ingredients_on_ingredient_id"
  end

  create_table "cocktails", force: :cascade do |t|
    t.string "name"
    t.string "instructions"
    t.string "alcoholic"
    t.string "category"
    t.string "image"
    t.string "glass"
    t.string "iba"
    t.string "ingredient_1_name"
    t.string "ingredient_2_name"
    t.string "ingredient_3_name"
    t.string "ingredient_4_name"
    t.string "ingredient_5_name"
    t.string "ingredient_6_name"
    t.integer "ingredient_1_id"
    t.integer "ingredient_2_id"
    t.integer "ingredient_3_id"
    t.integer "ingredient_4_id"
    t.integer "ingredient_5_id"
    t.integer "ingredient_6_id"
    t.string "measure_1"
    t.string "measure_2"
    t.string "measure_3"
    t.string "measure_4"
    t.string "measure_5"
    t.string "measure_6"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hidden_cocktails", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "cocktail_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cocktail_id"], name: "index_hidden_cocktails_on_cocktail_id"
    t.index ["user_id"], name: "index_hidden_cocktails_on_user_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_cocktails", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "cocktail_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "review"
    t.boolean "made"
    t.boolean "like"
    t.index ["cocktail_id"], name: "index_user_cocktails_on_cocktail_id"
    t.index ["user_id"], name: "index_user_cocktails_on_user_id"
  end

  create_table "user_ingredients", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "ingredient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "index_user_ingredients_on_ingredient_id"
    t.index ["user_id"], name: "index_user_ingredients_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
